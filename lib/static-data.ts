import { VACANCY_TYPES } from "@/interface/global.types";

export type OptionT = {
  label: string;
  value: string | number;
};

export const experienceOptions = [
  {
    label: "გამოცდილების გარეშე",
    value: "გამოცდილების გარეშე",
  },
  { label: "0-2 წელი", value: "0-2" },
  { label: "2-5 წელი", value: "2-5" },
  { label: "5-10 წელი", value: "5-10" },
  { label: "10+ წელი", value: "10+" },
];

export const workTypeOptions = [
  { value: VACANCY_TYPES.REMOTE, label: "დისტანციური" },
  { value: VACANCY_TYPES.FULL_TIME, label: "სრული განაკვეთი" },
  { value: VACANCY_TYPES.PART_TIME, label: "ნახევარი განაკვეთი" },
  { value: VACANCY_TYPES.INTERNSHIP, label: "სტაჟირება" },
];

export const workSectorOptions = [
  { label: "საჯარო სექტორი", value: 1 },
  { label: "კერძო სექტორი", value: 2 },
];

export const vacancyTypeOptions = [
  { label: "სტანდარტული", value: "standard" },
  { label: "პრემიუმი", value: "premium" },
];

export const workCategoryOptions = [
  { label: "საბანკო სფერო", value: 1 },
  { label: "ტექნოლოგიები", value: 2 },
  { label: "სამედიცინო", value: 3 },
  { label: "სხვა", value: 4 },
  { label: "განათლება", value: 5 },
  { label: "მარკეტინგი", value: 6 },
  { label: "დიზაინი", value: 7 },
  { label: "იურიდიული", value: 8 },
  { label: "ადმინისტრაცია", value: 9 },
  { label: "HR და რეკრუტინგი", value: 10 },
  { label: "ფინანსები", value: 11 },
  { label: "გაყიდვები", value: 12 },
  { label: "ლოგისტიკა", value: 13 },
  { label: "მშენებლობა", value: 14 },
  { label: "ინჟინერია", value: 15 },
  { label: "ხელოვნება", value: 16 },
  { label: "მედია და კომუნიკაცია", value: 17 },
  { label: "ტურიზმი", value: 18 },
  { label: "რესტორნები და კვება", value: 19 },
  { label: "სოფლის მეურნეობა", value: 20 },
  { label: "სოციალური მომსახურება", value: 21 },
  { label: "სპორტი და ფიტნესი", value: 22 },
  { label: "უსაფრთხოება", value: 23 },
  { label: "სადაზღვევო", value: 24 },
  { label: "კონსულტაცია", value: 25 },
  { label: "სახელმწიფო სამსახური", value: 26 },
  { label: "NGO და საქველმოქმედო", value: 27 },
  { label: "მთარგმნელობა", value: 28 },
  { label: "არქიტექტურა", value: 29 },
  { label: "მოდელირება და ანიმაცია", value: 30 },
  { label: "UI/UX დიზაინი", value: 31 },
  { label: "ვებდეველოპმენტი", value: 32 },
  { label: "მობილური აპლიკაციები", value: 33 },
  { label: "კონტენტის შექმნა", value: 34 },
  { label: "SEO და SEM", value: 35 },
  { label: "ელექტრონიკა", value: 36 },
  { label: "ქიმია და ბიოტექნოლოგია", value: 37 },
  { label: "მონაცემთა ანალიზი", value: 38 },
  { label: "ხელოვნური ინტელექტი", value: 39 },
  { label: "კიბერუსაფრთხოება", value: 40 },
];
