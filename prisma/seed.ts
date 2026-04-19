import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function wipe() {
  await prisma.report.deleteMany();
  await prisma.outage.deleteMany();
  await prisma.workOrder.deleteMany();
  await prisma.revenueRecord.deleteMany();
  await prisma.meter.deleteMany();
  await prisma.customer.deleteMany();
  await prisma.transformer.deleteMany();
  await prisma.zone.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organisation.deleteMany();
}

function monthDate(year: number, monthIndex0: number) {
  return new Date(Date.UTC(year, monthIndex0, 1));
}

async function main() {
  await wipe();

  const demoPassword = process.env.PLATFORM_DEMO_PASSWORD ?? "NoorDemo#2026";
  const passwordHash = bcrypt.hashSync(demoPassword, 10);

  const org = await prisma.organisation.create({
    data: {
      name: "Liberia Electricity Corporation",
      slug: "lec",
    },
  });

  const execUser = await prisma.user.create({
    data: {
      email: "demo+executive@noorinsight.com",
      name: "Executive User",
      passwordHash,
      role: "EXECUTIVE",
      organisationId: org.id,
    },
  });

  const opsUser = await prisma.user.create({
    data: {
      email: "demo+operations@noorinsight.com",
      name: "Operations User",
      passwordHash,
      role: "OPERATIONS",
      organisationId: org.id,
    },
  });

  const fieldUser = await prisma.user.create({
    data: {
      email: "demo+field@noorinsight.com",
      name: "Field User",
      passwordHash,
      role: "FIELD",
      organisationId: org.id,
    },
  });

  const zoneSpecs = [
    { name: "Greater Monrovia", code: "MON" },
    { name: "Margibi", code: "MAR" },
    { name: "Grand Bassa", code: "BAS" },
    { name: "Bomi", code: "BOM" },
    { name: "Nimba", code: "NIM" },
    { name: "Maryland", code: "MAR2" },
  ] as const;

  const zones = await prisma.$transaction(
    zoneSpecs.map((z) =>
      prisma.zone.create({
        data: {
          organisationId: org.id,
          name: z.name,
          code: z.code,
        },
      })
    )
  );

  const zoneByCode = Object.fromEntries(zones.map((z) => [z.code, z])) as Record<
    (typeof zoneSpecs)[number]["code"],
    (typeof zones)[number]
  >;

  const transformerSpecs = [
    { externalId: "TX-1042", zoneCode: "MON" as const, name: "TX-1042 Paynesville", lat: 6.3156, lng: -10.7969, riskTier: "ELEVATED" },
    { externalId: "TX-1088", zoneCode: "MON" as const, name: "TX-1088 Sinkor", lat: 6.305, lng: -10.78, riskTier: "LOW" },
    { externalId: "TX-1120", zoneCode: "BAS" as const, name: "TX-1120 Buchanan", lat: 5.88, lng: -9.944, riskTier: "SEVERE" },
    { externalId: "TX-1156", zoneCode: "BAS" as const, name: "TX-1156 Bassa rural", lat: 5.92, lng: -9.82, riskTier: "SEVERE" },
    { externalId: "TX-1184", zoneCode: "MAR" as const, name: "TX-1184 Kakata", lat: 6.53, lng: -10.35, riskTier: "ELEVATED" },
    { externalId: "TX-1201", zoneCode: "MAR" as const, name: "TX-1201 Firestone", lat: 6.58, lng: -10.45, riskTier: "ELEVATED" },
    { externalId: "TX-1219", zoneCode: "BOM" as const, name: "TX-1219 Tubmanburg", lat: 6.76, lng: -10.82, riskTier: "LOW" },
    { externalId: "TX-1233", zoneCode: "BOM" as const, name: "TX-1233 rural Bomi", lat: 6.72, lng: -10.9, riskTier: "LOW" },
    { externalId: "TX-1248", zoneCode: "NIM" as const, name: "TX-1248 Ganta", lat: 7.25, lng: -8.98, riskTier: "ELEVATED" },
    { externalId: "TX-1260", zoneCode: "NIM" as const, name: "TX-1260 Sanniquellie", lat: 7.36, lng: -8.69, riskTier: "LOW" },
    { externalId: "TX-1274", zoneCode: "MAR2" as const, name: "TX-1274 Harper", lat: 4.38, lng: -7.72, riskTier: "ELEVATED" },
    { externalId: "TX-1288", zoneCode: "MAR2" as const, name: "TX-1288 Pleebo", lat: 4.58, lng: -7.67, riskTier: "LOW" },
  ] as const;

  await prisma.$transaction(
    transformerSpecs.map((t) =>
      prisma.transformer.create({
        data: {
          organisationId: org.id,
          zoneId: zoneByCode[t.zoneCode].id,
          externalId: t.externalId,
          name: t.name,
          lat: t.lat,
          lng: t.lng,
          riskTier: t.riskTier,
        },
      })
    )
  );

  const customers: { accountNumber: string; name: string; zoneCode: keyof typeof zoneByCode }[] = [];
  let acc = 88000;
  for (let i = 0; i < 48; i += 1) {
    acc += 1;
    const zoneCode = zoneSpecs[i % zoneSpecs.length].code as keyof typeof zoneByCode;
    customers.push({
      accountNumber: `LEC-${acc}`,
      name: `Customer ${i + 1}`,
      zoneCode,
    });
  }

  const createdCustomers = await prisma.$transaction(
    customers.map((c) =>
      prisma.customer.create({
        data: {
          organisationId: org.id,
          zoneId: zoneByCode[c.zoneCode].id,
          accountNumber: c.accountNumber,
          name: c.name,
          address: `${c.zoneCode} service territory`,
        },
      })
    )
  );

  await prisma.$transaction(
    createdCustomers.map((cust, idx) =>
      prisma.meter.create({
        data: {
          organisationId: org.id,
          customerId: cust.id,
          serialNumber: `MTR-${100000 + idx}`,
          meterType: idx % 5 === 0 ? "PREPAID_SMART" : "POSTPAID_ANALOG",
        },
      })
    )
  );

  const revenueAmounts = [
    1_520_000, 1_560_000, 1_610_000, 1_600_000, 1_680_000, 1_710_000, 1_740_000, 1_790_000, 1_800_000,
    1_820_000, 1_830_000, 1_842_000,
  ];

  await prisma.$transaction(
    revenueAmounts.map((amount, idx) =>
      prisma.revenueRecord.create({
        data: {
          organisationId: org.id,
          period: monthDate(2025, idx),
          amount,
          currency: "USD",
          category: "TOTAL",
        },
      })
    )
  );

  const now = Date.now();

  await prisma.workOrder.createMany({
    data: [
      {
        organisationId: org.id,
        number: "WO-240188",
        title: "Replace LV CT bank (Paynesville cluster)",
        site: "SS-12 / Feeder A12",
        district: "Paynesville",
        priority: "P1",
        status: "IN_PROGRESS",
        assignedUserId: fieldUser.id,
        createdAt: new Date(now - 1000 * 60 * 60 * 26),
        dueAt: new Date(now + 1000 * 60 * 60 * 6),
      },
      {
        organisationId: org.id,
        number: "WO-240191",
        title: "Thermal scan (downtown ring main)",
        site: "RM-03",
        district: "Monrovia",
        priority: "P2",
        status: "IN_PROGRESS",
        assignedUserId: opsUser.id,
        createdAt: new Date(now - 1000 * 60 * 60 * 8),
        dueAt: new Date(now + 1000 * 60 * 60 * 10),
      },
      {
        organisationId: org.id,
        number: "WO-240179",
        title: "Pole changeout (Buchanan industrial)",
        site: "Line 44",
        district: "Buchanan",
        priority: "P1",
        status: "IN_PROGRESS",
        assignedUserId: fieldUser.id,
        createdAt: new Date(now - 1000 * 60 * 60 * 18),
        dueAt: new Date(now - 1000 * 60 * 60 * 2),
      },
      {
        organisationId: org.id,
        number: "WO-240160",
        title: "Meter investigation (suspected bypass)",
        site: "C12-8841",
        district: "Sinkor",
        priority: "P1",
        status: "OPEN",
        assignedUserId: null,
        createdAt: new Date(now - 1000 * 60 * 60 * 4),
        dueAt: new Date(now + 1000 * 60 * 60 * 20),
      },
      {
        organisationId: org.id,
        number: "WO-240155",
        title: "Vegetation clearance (MV span)",
        site: "Span 19B",
        district: "Margibi",
        priority: "P3",
        status: "OPEN",
        assignedUserId: null,
        createdAt: new Date(now - 1000 * 60 * 60 * 30),
        dueAt: new Date(now + 1000 * 60 * 60 * 48),
      },
      {
        organisationId: org.id,
        number: "WO-240140",
        title: "Recloser commissioning",
        site: "RC-07",
        district: "Gbarnga",
        priority: "P2",
        status: "COMPLETED",
        assignedUserId: execUser.id,
        createdAt: new Date(now - 1000 * 60 * 60 * 72),
        dueAt: new Date(now - 1000 * 60 * 60 * 48),
        completedAt: new Date(now - 1000 * 60 * 60 * 50),
      },
      {
        organisationId: org.id,
        number: "WO-240132",
        title: "Customer reconnect (payment cleared)",
        site: "SVC-22109",
        district: "Monrovia",
        priority: "P2",
        status: "COMPLETED",
        assignedUserId: fieldUser.id,
        createdAt: new Date(now - 1000 * 60 * 60 * 80),
        dueAt: new Date(now - 1000 * 60 * 60 * 60),
        completedAt: new Date(now - 1000 * 60 * 60 * 58),
      },
      {
        organisationId: org.id,
        number: "WO-240118",
        title: "Substation battery bank test",
        site: "SS-04",
        district: "Harper",
        priority: "P3",
        status: "ON_HOLD",
        assignedUserId: null,
        createdAt: new Date(now - 1000 * 60 * 60 * 120),
        dueAt: new Date(now + 1000 * 60 * 60 * 24),
      },
    ],
  });

  await prisma.outage.createMany({
    data: [
      {
        organisationId: org.id,
        district: "Paynesville",
        startedAt: new Date(now - 1000 * 60 * 90),
        customersAffected: 12400,
        status: "IN_PROGRESS",
      },
      {
        organisationId: org.id,
        district: "Sinkor feeder group",
        startedAt: new Date(now - 1000 * 60 * 60 * 7),
        customersAffected: 6200,
        status: "CONTAINED",
      },
      {
        organisationId: org.id,
        district: "Buchanan substation",
        startedAt: new Date(now - 1000 * 60 * 60 * 26),
        customersAffected: 3050,
        status: "RESTORED",
      },
      {
        organisationId: org.id,
        district: "Gbarnga north",
        startedAt: new Date(now - 1000 * 60 * 60 * 54),
        customersAffected: 1780,
        status: "RESTORED",
      },
      {
        organisationId: org.id,
        district: "Kakata industrial",
        startedAt: new Date(now - 1000 * 60 * 60 * 12),
        customersAffected: 4100,
        status: "CONTAINED",
      },
    ],
  });

  await prisma.report.createMany({
    data: [
      {
        organisationId: org.id,
        type: "DONOR_PACK",
        title: "Q1 outcomes pack (draft)",
        periodStart: monthDate(2026, 0),
        periodEnd: monthDate(2026, 2),
        metadata: { version: 1, audience: "donor" },
      },
      {
        organisationId: org.id,
        type: "REGULATORY_FILING",
        title: "Regulator monthly disclosure",
        periodStart: monthDate(2026, 2),
        periodEnd: monthDate(2026, 2),
        metadata: { jurisdiction: "Liberia" },
      },
      {
        organisationId: org.id,
        type: "INTERNAL_REVIEW",
        title: "Board briefing (loss program)",
        periodStart: monthDate(2026, 1),
        periodEnd: monthDate(2026, 2),
        metadata: { confidential: true },
      },
    ],
  });

  // eslint-disable-next-line no-console
  console.log("Seed complete:", {
    organisation: org.slug,
    users: 3,
    zones: zones.length,
    transformers: transformerSpecs.length,
    customers: createdCustomers.length,
    meters: createdCustomers.length,
    revenueMonths: revenueAmounts.length,
    workOrders: 8,
    outages: 5,
    reports: 3,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
