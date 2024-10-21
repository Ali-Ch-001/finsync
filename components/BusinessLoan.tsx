import EmploymentInformation from '@/components/EmploymentInformation';
import LoanInformation from '@/components/LoanInformation';
import FinancialInformation from '@/components/FinancialInformation';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'

interface BusinessLoanProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const BusinessLoan: React.FC<BusinessLoanProps> = ({ methods }) => (
  <>


    {/* Business Information Section */}
    <div className="structure-information mt-8">
      <h3 className="info-text">Business Information</h3>

      {/* Business Name */}
      <div className="mt-4">
        <Label htmlFor="businessName" className="text-lg">Business Name</Label>
        <Input
          id="businessName"
          {...methods.register('businessName')}
          placeholder="Ex: Tech Innovators Inc."
          className="special-inputbar"
        />
      </div>

      {/* Industry */}
      <div className="mt-4">
        <Label htmlFor="industry" className="text-lg">Industry</Label>
        <Input
          id="industry"
          {...methods.register('industry')}
          placeholder="Ex: Software Development"
          className="special-inputbar"
        />
      </div>

      {/* Business Address */}
      <div className="mt-4">
        <Label htmlFor="businessAddress" className="text-lg">Business Address</Label>
        <Input
          id="businessAddress"
          {...methods.register('businessAddress')}
          placeholder="Ex: 123 Innovation Lane, Suite 500, Tech City, 12345"
          className="special-inputbar"
        />
      </div>

      {/* Years in Operation */}
      <div className="mt-4">
        <Label htmlFor="yearsInOperation" className="text-lg">Years in Operation</Label>
        <Input
          id="yearsInOperation"
          {...methods.register('yearsInOperation')}
          placeholder="Ex: 5 years"
          className="special-inputbar"
        />
      </div>

      {/* Number of Employees */}
      <div className="mt-4">
        <Label htmlFor="numberOfEmployees" className="text-lg">Number of Employees</Label>
        <Input
          id="numberOfEmployees"
          {...methods.register('numberOfEmployees')}
          placeholder="Ex: 15"
          className="special-inputbar"
        />
      </div>

      {/* Business Structure */}
      <div className="mt-4">
        <Label htmlFor="businessStructure" className="text-lg">Business Structure</Label>
        <Input
          id="businessStructure"
          {...methods.register('businessStructure')}
          placeholder="Ex: Partnership"
          className="special-inputbar"
        />
      </div>

      {/* Purpose of the Loan */}
      <div className="mt-4">
        <Label htmlFor="loanPurposeBusiness" className="text-lg">Purpose of the Loan</Label>
        <Input
          id="loanPurposeBusiness"
          {...methods.register('loanPurposeBusiness')}
          placeholder="Ex: Expansion of software development team"
          className="special-inputbar"
        />
      </div>
    </div>
        {/* Employment Information Section */}
        <EmploymentInformation methods={methods} />

{/* Loan Information Section */}
<LoanInformation methods={methods} />

{/* Financial Information Section */}
<FinancialInformation methods={methods} />
  </>
);

export default BusinessLoan;
