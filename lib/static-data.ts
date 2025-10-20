import { VACANCY_TYPES } from "@/interface/global.types";

export type OptionT = {
  label: string;
  value: string;
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
];

export const workSectorOptions = [
  { label: "საჯარო სექტორი", value: "საჯარო სექტორი" },
  { label: "კერძო სექტორი", value: "კერძო სექტორი" },
];

export const vacancyTypeOptions = [
  { label: "სტანდარტული", value: "standard" },
  { label: "პრემიუმი", value: "premium" },
];

export const workCategoryOptions = [
  { label: "საბანკო სფერო", value: "საბანკო სფერო" },
  { label: "ტექნოლოგიები", value: "ტექნოლოგიები" },
  { label: "სამედიცინო", value: "სამედიცინო" },
  { label: "სხვა", value: "სხვა" },
  { label: "განათლება", value: "განათლება" },
  { label: "მარკეტინგი", value: "მარკეტინგი" },
  { label: "დიზაინი", value: "დიზაინი" },
  { label: "იურიდიული", value: "იურიდიული" },
  { label: "ადმინისტრაცია", value: "ადმინისტრაცია" },
  { label: "HR და რეკრუტინგი", value: "HR და რეკრუტინგი" },
  { label: "ფინანსები", value: "ფინანსები" },
  { label: "გაყიდვები", value: "გაყიდვები" },
  { label: "ლოგისტიკა", value: "ლოგისტიკა" },
  { label: "მშენებლობა", value: "მშენებლობა" },
  { label: "ინჟინერია", value: "ინჟინერია" },
  { label: "ხელოვნება", value: "ხელოვნება" },
  { label: "მედია და კომუნიკაცია", value: "მედია და კომუნიკაცია" },
  { label: "ტურიზმი", value: "ტურიზმი" },
  { label: "რესტორნები და კვება", value: "რესტორნები და კვება" },
  { label: "სოფლის მეურნეობა", value: "სოფლის მეურნეობა" },
  { label: "სოციალური მომსახურება", value: "სოციალური მომსახურება" },
  { label: "სპორტი და ფიტნესი", value: "სპორტი და ფიტნესი" },
  { label: "უსაფრთხოება", value: "უსაფრთხოება" },
  { label: "სადაზღვევო", value: "სადაზღვევო" },
  { label: "კონსულტაცია", value: "კონსულტაცია" },
  { label: "სახელმწიფო სამსახური", value: "სახელმწიფო სამსახური" },
  { label: "NGO და საქველმოქმედო", value: "NGO და საქველმოქმედო" },
  { label: "მთარგმნელობა", value: "მთარგმნელობა" },
  { label: "არქიტექტურა", value: "არქიტექტურა" },
  { label: "მოდელირება და ანიმაცია", value: "მოდელირება და ანიმაცია" },
  { label: "UI/UX დიზაინი", value: "UI/UX დიზაინი" },
  { label: "ვებდეველოპმენტი", value: "ვებდეველოპმენტი" },
  { label: "მობილური აპლიკაციები", value: "მობილური აპლიკაციები" },
  { label: "კონტენტის შექმნა", value: "კონტენტის შექმნა" },
  { label: "SEO და SEM", value: "SEO და SEM" },
  { label: "ელექტრონიკა", value: "ელექტრონიკა" },
  { label: "ქიმია და ბიოტექნოლოგია", value: "ქიმია და ბიოტექნოლოგია" },
  { label: "მონაცემთა ანალიზი", value: "მონაცემთა ანალიზი" },
  { label: "ხელოვნური ინტელექტი", value: "ხელოვნური ინტელექტი" },
  { label: "კიბერუსაფრთხოება", value: "კიბერუსაფრთხოება" },
];
