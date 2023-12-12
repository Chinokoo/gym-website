export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  desc: string;
}

export interface ClassType {
  name: string;
  desc?: string;
  image: string;
}
