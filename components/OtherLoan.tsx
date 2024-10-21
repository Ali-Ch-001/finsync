import EmploymentInformation from '@/components/EmploymentInformation';
import LoanInformation from '@/components/LoanInformation';
import FinancialInformation from '@/components/FinancialInformation';
import { UseFormReturn } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface OtherLoanProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const OtherLoan: React.FC<OtherLoanProps> = ({ methods }) => (
  <>
      {/* Loan Purpose Description Section */}
      <div className="structure-information mt-8">
      <h3 className="info-text">Describe Your Loan Purpose</h3>

      {/* Large Text Box for Loan Purpose */}
      <div className="mt-4">
        <Label htmlFor="loanPurposeDescription" className="text-lg">Loan Purpose Description</Label>
        <Input
          id="loanPurposeDescription"
          {...methods.register('loanPurposeDescription')}
          placeholder="Explain your needs..."
          className="special-inputbar w-full h-32 p-2 border border-gray-300 rounded-md"
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

export default OtherLoan;
