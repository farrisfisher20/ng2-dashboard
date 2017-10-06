export class Name{
  First: string;
  Last: string;
  Fullname: string;
  JobTitle: string;
}

export class Company{
  Name: string;
  Contact: string;
  ZipCode: string;
  Country: string;
  State: string;
  City: string;
  AboutUs: string;
  Industry: string;
  Diligence: string;
}

export class Reason1{
  tCompanyName: string;
  tIndustry: string;
  tEmpNo: number;
  tAnnualRev: number;
  tAcqDate: string;
}

export class Reason2{
  tEmpNo: number;
  tAnnualRev: number;
  tNetIncome: number;
  tSellDate: string
}

export class Reason3{
  tBizImp: boolean;
  tCostSaving: boolean;
  tPerformanceDate: boolean;
  tResOpt: boolean;
}
export class Reason4{
  tReason: string;
}

export class User{
  UserType: string;
  ProjectID: string;
  Email: string;
  Password: string;
  PasswordConfirm: string;
  Name: Name;
  ProjectName: string;
  Company: Company;
  Reason: number;
  Reason1: Reason1;
  Reason2: Reason2;
  Reason3: Reason3;
  Reason4: Reason4;
}

export class Question{
  uuid: string;
  Type: string;
  Label: string;
  value   : string;
  comment : string;
  HasDocument: boolean;
  Items: [{
       uuid    : string;
       Text    : string;
       value   : any;
   }]
}

export class Answer{
  uuid: string;
  value: string;
  comment: string;
  Items: [{
      uuid: string;
      value: any;
  }]
}

export class Category{
  uuid			: string;
	Title			: string;
	Desc			: string;
  created_time: Date;
	hasChildren	: boolean;
	expanded		: boolean;
	Questions 	: Array<object>;
}
