'use client';

import HeaderBox from "@/components/HeaderBox";
import React, { useState } from "react";
import BusinessLoan from "@/components/BusinessLoan";
import HomeLoan from "@/components/HomeLoan";
import EducationLoan from "@/components/EducationLoan";
import InvestmentLoan from "@/components/InvestmentLoan";
import OtherLoan from "@/components/OtherLoan";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loanFormSchema } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {  addLoanApplication } from "@/lib/actions/user.actions";

const LoanForm: React.FC = () => {
  const methods = useForm<z.infer<typeof loanFormSchema>>({
    resolver: zodResolver(loanFormSchema),
  });

  const { handleSubmit } = methods;

  const [loanPurpose, setLoanPurpose] = useState<string | null>(null);

  const onSubmit = async (data: z.infer<typeof loanFormSchema>) => {
    try {
      // Validate enum fields
      const validInterestRateTypes = ["fixed", "variable"];
      if (!validInterestRateTypes.includes(data.interestRateType)) {
        throw new Error(
          `Invalid Interest Rate Type. Allowed values are: ${validInterestRateTypes.join(", ")}`
        );
      }
  
      // Validate required fields
      if (!data.loanAmount) throw new Error("Desired Loan Amount is required.");
      if (!data.annualIncome) throw new Error("Annual Income is required.");
      if (!data.employmentStatus) throw new Error("Employment Status is required.");
      if (!data.jobTitle) throw new Error("Job Title is required.");
      if (!data.phone) throw new Error("Phone number is required.");
      if (!data.maritalStatus) throw new Error("Marital Status is required.");
  
      // Prepare loan data
      const loanData: Record<string, string | null> = {
        DesiredLoanAmount: data.loanAmount,
        Annual_Income: data.annualIncome,
        Type: data.loanPurpose,
        Phone: data.phone,
        Marital_Status: data.maritalStatus,
        Employment_Status: data.employmentStatus || "Not specified",
        Job_Title: data.jobTitle || "Not specified",
        Years_Of_Employment: data.yearsOfEmployment || "0",
        Monthly_Gross_Income: data.monthlyGrossIncome || "0",
        Other_Sources_Of_Income: data.otherIncome || "None",
        Desired_Loan_Term: data.loanTerm || "Not specified",
        Down_Payment: data.downPayment || "0",
        Interest_Rate_Type: data.interestRateType,
        Repayment_Plan: data.repaymentPlan || "Monthly",
        Current_Assets: data.currentAssets || "None",
        Current_Liabilities: data.currentLiabilities || "None",
        Existing_Debts: data.existingDebts || "None",
        Purpose_Of_The_Loan: data.purposeOfTheLoan || "Not specified",
        Business_Name: data.businessDetails?.businessName || null,
        Industry: data.businessDetails?.industry || null,
        Business_Address: data.businessDetails?.businessAddress || null,
        Years_In_Operation: data.businessDetails?.yearsInOperation || null,
        Number_Of_Employees: data.businessDetails?.numberOfEmployees || null,
        Business_Structure: data.businessDetails?.businessStructure || null,
        Type_Of_Property: data.homeDetails?.propertyType || null,
        Purchase_Price: data.homeDetails?.purchasePrice || null,
        Appraised_Value: data.homeDetails?.appraisedValue || null,
        Existing_Mortgage_Details: data.homeDetails?.existingMortgageDetails || null,
        Real_Estate_Agent_Information: data.homeDetails?.realEstateAgentInfo || null,
        Institution_Name: data.educationDetails?.institutionName || null,
        Course_Of_Study: data.educationDetails?.courseOfStudy || null,
        Duration_Of_Course: data.educationDetails?.durationOfCourse || null,
        Start_Date: data.educationDetails?.startDate || null,
        Expected_Graduation_Date: data.educationDetails?.expectedGraduationDate || null,
        Investment_Type: data.investmentDetails?.investmentType || null,
        Investment_Purpose: data.investmentDetails?.investmentPurpose || null,
        Investment_Location: data.investmentDetails?.investmentLocation || null,
        "Property-Value-Appraisal": data.investmentDetails?.propertyValue || null,
        Current_Real_Estate_Ownership: data.investmentDetails?.ownership || null,
        Current_Real_Estate_Holdings: data.investmentDetails?.realEstateHoldings || null,
      };
   
       // Call the action to submit loan data
       const response = await addLoanApplication(loanData);
   
       if (!response) {
         throw new Error("Failed to add loan application. Please try again.");
       }
   
       // Success message
       alert("Loan application submitted successfully!");
     } catch (error) {
       console.error("Error adding loan application:", error);
   
       // User-friendly error feedback
       if (error instanceof Error) {
         alert(`Failed to submit the loan application: ${error.message}`);
       } else {
         alert("Failed to submit the loan application due to an unexpected error.");
       }
     }
  };
  
  
  
  
  return (
    <div className="flex flex-col h-screen pt-3 background-loan overflow-y-scroll">
      <div className="mx-8">
        <HeaderBox title="Apply for a Loan" subtext="GET THE BEST RATES POSSIBLE" />
      </div>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full pt-4 pr-2">
            {/* Desired Loan Amount */}
            <div className="w-full md:w-1/2">
              <Label htmlFor="loanAmount" className="text-lg">Desired Loan Amount $</Label>
              <Input id="loanAmount" {...methods.register("loanAmount")} placeholder="Enter desired loan amount" />
            </div>
            {/* Annual Income */}
            <div className="w-full md:w-1/2">
              <Label htmlFor="annualIncome" className="text-lg">Annual Income $</Label>
              <Input id="annualIncome" {...methods.register("annualIncome")} placeholder="Enter your annual income" />
            </div>
          </div>

          {/* Loan Purpose */}
          <div className="pt-2 col-span-1 md:col-span-2">
            <Label className="font-bold text-xl">Loan will be used for:</Label>
            <div className="pt-2 flex flex-wrap gap-4 text-lg">
              <label>
                <Input type="radio" value="Business" {...methods.register("loanPurpose")} onChange={() => setLoanPurpose("Business")} /> Business
              </label>
              <label>
                <Input type="radio" value="Home Improvement" {...methods.register("loanPurpose")} onChange={() => setLoanPurpose("Home Improvement")} /> Home
              </label>
              <label>
                <Input type="radio" value="Education" {...methods.register("loanPurpose")} onChange={() => setLoanPurpose("Education")} /> Education
              </label>
              <label>
                <Input type="radio" value="Investment" {...methods.register("loanPurpose")} onChange={() => setLoanPurpose("Investment")} /> Investment
              </label>
              <label>
                <Input type="radio" value="Other" {...methods.register("loanPurpose")} onChange={() => setLoanPurpose("Other")} /> Other
              </label>
            </div>
          </div>

          {/* Conditionally render additional inputs based on loan purpose */}
          {loanPurpose === "Business" && <BusinessLoan methods={methods} />}
          {loanPurpose === "Home Improvement" && <HomeLoan methods={methods} />}
          {loanPurpose === "Education" && <EducationLoan methods={methods} />}
          {loanPurpose === "Investment" && <InvestmentLoan methods={methods} />}
          {loanPurpose === "Other" && <OtherLoan methods={methods} />}

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-2 mt-4">
            <h3 className="info-text">Contact Information</h3>
            <div className="mt-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...methods.register("phone")} placeholder="Enter your phone number" className="mt-2 w-full md:w-2/5" />
            </div>
          </div>

          {/* Marital Status */}
          <div className="pt-2 col-span-1 md:col-span-2">
            <Label className="info-text">Marital Status</Label>
            <div className="pt-2 flex gap-4">
              <label>
                <Input type="radio" value="Single" {...methods.register("maritalStatus")} /> Single
              </label>
              <label>
                <Input type="radio" value="Married" {...methods.register("maritalStatus")} /> Married
              </label>
              <label>
                <Input type="radio" value="Other" {...methods.register("maritalStatus")} /> Other
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <Button type="submit" className="py-3 px-6 bg-blue-600 text-white rounded-lg">
              Submit Loan Application
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoanForm;
