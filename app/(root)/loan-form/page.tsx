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

const LoanForm: React.FC = () => {
  const methods = useForm<z.infer<typeof loanFormSchema>>({
    resolver: zodResolver(loanFormSchema),
  });

  const { handleSubmit } = methods;
  
  // State to track selected loan purpose
  const [loanPurpose, setLoanPurpose] = useState<string | null>(null);

  const onSubmit = (data: z.infer<typeof loanFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col h-screen pt-3 background-loan overflow-y-scroll">
      <div className="mx-8">
        <HeaderBox
          title="Apply for a Loan"
          subtext="GET THE BEST RATES POSSIBLE"
        />
      </div>

      <FormProvider {...methods}>
        {/* Use Form component */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="flex flex-col md:flex-row justify-between gap-8 w-full pt-4 pr-2">
            {/* Desired Loan Amount */}
            <div className="w-full md:w-1/2">
              <Label htmlFor="loanAmount" className="text-lg">Desired Loan Amount $</Label>
              <Input 
                id="loanAmount" 
                {...methods.register("loanAmount")} 
                placeholder="Enter desired loan amount" 
                className="" 
              />
            </div>

            {/* Annual Income */}
            <div className="w-full md:w-1/2">
              <Label htmlFor="annualIncome" className="text-lg">Annual Income $</Label>
              <Input 
                id="annualIncome" 
                {...methods.register("annualIncome")} 
                placeholder="Enter your annual income" 
                className="" 
              />
            </div>
          </div>

          {/* Loan Purpose */}
          <div className="pt-2 col-span-1 md:col-span-2">
            <Label className="font-bold text-xl">Loan will be used for:</Label>
            <div className="pt-2 flex flex-wrap gap-4 text-lg">

              <label>
                <Input 
                  type="radio" 
                  name="loanPurpose" 
                  value="Business" 
                  onChange={() => setLoanPurpose("Business")}
                /> Business 
              </label>
              <label>
                <Input 
                  type="radio" 
                  name="loanPurpose" 
                  value="Home Improvement" 
                  onChange={() => setLoanPurpose("Home Improvement")}
                /> Home 
              </label>
              <label>
                <Input 
                  type="radio" 
                  name="loanPurpose" 
                  value="Education" 
                  onChange={() => setLoanPurpose("Education")}
                /> Education
              </label>
              <label>
                <Input 
                  type="radio" 
                  name="loanPurpose" 
                  value="Investment" 
                  onChange={() => setLoanPurpose("Investment")}
                /> Investment
              </label>
              <label>
                <Input 
                  type="radio" 
                  name="loanPurpose" 
                  value="Other" 
                  onChange={() => setLoanPurpose("Other")}
                /> Other
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
          </div>

          {/* Phone */}
          <div className="w-full">
            <Label htmlFor="phone">Phone</Label>
            <Input 
              id="phone" 
              {...methods.register("phone")} 
              placeholder="Enter your phone number" 
              className="mt-2 w-full md:w-2/5"  
            />
          </div>

          {/* Marital Status */}
          <div className="pt-2 col-span-1 md:col-span-2">
            <Label className="info-text">Marital Status</Label>
            <div className="pt-2 flex gap-4">
              <label>
                <Input type="radio" name="maritalStatus" value="Single" /> Single
              </label>
              <label>
                <Input type="radio" name="maritalStatus" value="Married" /> Married
              </label>
              <label>
                <Input type="radio" name="maritalStatus" value="Other" /> Other
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2 text-center mt-4 ">
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