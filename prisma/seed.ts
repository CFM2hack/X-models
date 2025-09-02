import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const models = [
  {
    publicName: "elara-vance",
    handle: "@elaravance",
    photos: [{ url: "https://picsum.photos/seed/elara/400/400", order: 1 }],
    isActive: true,
    user: { name: "Elara Vance", email: "elara-vance@example.com", password: "" },
  },
  {
    publicName: "julian-cross",
    handle: "@juliancross",
    photos: [{ url: "https://picsum.photos/seed/julian/400/400", order: 1 }],
    isActive: true,
    user: { name: "Julian Cross", email: "julian-cross@example.com", password: "" },
  },

  // Additional 18 models with distinct names and photo seeds
  {
    publicName: "lyra-stone",
    handle: "@lyrastone",
    photos: [{ url: "https://picsum.photos/seed/lyra/400/400", order: 1 }],
    isActive: true,
    user: { name: "Lyra Stone", email: "lyra-stone@example.com", password: "" },
  },
  {
    publicName: "dax-woods",
    handle: "@daxwoods",
    photos: [{ url: "https://picsum.photos/seed/dax/400/400", order: 1 }],
    isActive: true,
    user: { name: "Dax Woods", email: "dax-woods@example.com", password: "" },
  },
  {
    publicName: "mila-rogers",
    handle: "@milarogers",
    photos: [{ url: "https://picsum.photos/seed/mila/400/400", order: 1 }],
    isActive: true,
    user: { name: "Mila Rogers", email: "mila-rogers@example.com", password: "" },
  },
  {
    publicName: "kai-harper",
    handle: "@kaiharper",
    photos: [{ url: "https://picsum.photos/seed/kai/400/400", order: 1 }],
    isActive: true,
    user: { name: "Kai Harper", email: "kai-harper@example.com", password: "" },
  },
  {
    publicName: "ava-blake",
    handle: "@avablake",
    photos: [{ url: "https://picsum.photos/seed/ava/400/400", order: 1 }],
    isActive: true,
    user: { name: "Ava Blake", email: "ava-blake@example.com", password: "" },
  },
  {
    publicName: "jeremiah-fox",
    handle: "@jeremiahfox",
    photos: [{ url: "https://picsum.photos/seed/jeremiah/400/400", order: 1 }],
    isActive: true,
    user: { name: "Jeremiah Fox", email: "jeremiah-fox@example.com", password: "" },
  },
  {
    publicName: "sienna-ray",
    handle: "@siennaray",
    photos: [{ url: "https://picsum.photos/seed/sienna/400/400", order: 1 }],
    isActive: true,
    user: { name: "Sienna Ray", email: "sienna-ray@example.com", password: "" },
  },
  {
    publicName: "leo-stark",
    handle: "@leostark",
    photos: [{ url: "https://picsum.photos/seed/leo/400/400", order: 1 }],
    isActive: true,
    user: { name: "Leo Stark", email: "leo-stark@example.com", password: "" },
  },
  {
    publicName: "zoe-hart",
    handle: "@zoehart",
    photos: [{ url: "https://picsum.photos/seed/zoe/400/400", order: 1 }],
    isActive: true,
    user: { name: "Zoe Hart", email: "zoe-hart@example.com", password: "" },
  },
  {
    publicName: "ryan-cole",
    handle: "@ryancole",
    photos: [{ url: "https://picsum.photos/seed/ryan/400/400", order: 1 }],
    isActive: true,
    user: { name: "Ryan Cole", email: "ryan-cole@example.com", password: "" },
  },
  {
    publicName: "luna-summers",
    handle: "@lunasummers",
    photos: [{ url: "https://picsum.photos/seed/luna/400/400", order: 1 }],
    isActive: true,
    user: { name: "Luna Summers", email: "luna-summers@example.com", password: "" },
  },
  {
    publicName: "dylan-frost",
    handle: "@dylanfrost",
    photos: [{ url: "https://picsum.photos/seed/dylan/400/400", order: 1 }],
    isActive: true,
    user: { name: "Dylan Frost", email: "dylan-frost@example.com", password: "" },
  },
  {
    publicName: "mia-wynn",
    handle: "@miawynn",
    photos: [{ url: "https://picsum.photos/seed/mia/400/400", order: 1 }],
    isActive: true,
    user: { name: "Mia Wynn", email: "mia-wynn@example.com", password: "" },
  },
  {
    publicName: "ethan-coleman",
    handle: "@ethancoleman",
    photos: [{ url: "https://picsum.photos/seed/ethan/400/400", order: 1 }],
    isActive: true,
    user: { name: "Ethan Coleman", email: "ethan-coleman@example.com", password: "" },
  },
  {
    publicName: "chloe-rivers",
    handle: "@chloerivers",
    photos: [{ url: "https://picsum.photos/seed/chloe/400/400", order: 1 }],
    isActive: true,
    user: { name: "Chloe Rivers", email: "chloe-rivers@example.com", password: "" },
  },
  {
    publicName: "noah-bentley",
    handle: "@noahbentley",
    photos: [{ url: "https://picsum.photos/seed/noah/400/400", order: 1 }],
    isActive: true,
    user: { name: "Noah Bentley", email: "noah-bentley@example.com", password: "" },
  },
  {
    publicName: "isla-hayes",
    handle: "@islahayes",
    photos: [{ url: "https://picsum.photos/seed/isla/400/400", order: 1 }],
    isActive: true,
    user: { name: "Isla Hayes", email: "isla-hayes@example.com", password: "" },
  },
];

async function main() {
  for (const model of models) {
    await prisma.profile.upsert({
      where: { publicName: model.publicName },
      update: {
        handle: model.handle,
        photos: model.photos,
        isActive: model.isActive,
      },
      create: {
        publicName: model.publicName,
        handle: model.handle,
        photos: model.photos,
        isActive: model.isActive,
        user: {
          create: {
            name: model.user.name,
            email: model.user.email,
            password: model.user.password,
          },
        },
      },
    });
  }
  console.log("Seed data inserted");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
