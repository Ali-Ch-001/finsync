import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { UseFormReturn } from 'react-hook-form';

interface LoanInformationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const LoanInformation: React.FC<LoanInformationProps> = ({ methods }) => (
  <div className="structure-information mt-8">
    <h3 className="info-text">Loan Information</h3>

    {/* Desired Loan Term */}
    <div className="mt-4">
      <Label htmlFor="loanTerm" className="text-lg">Desired Loan Term</Label>
      <Input
        id="loanTerm"
        {...methods.register('loanTerm')}
        placeholder="Ex: 30 years"
        className="special-inputbar"
      />
    </div>

    {/* Down Payment */}
    <div className="mt-4">
      <Label htmlFor="downPayment" className="text-lg">Down Payment</Label>
      <Input
        id="downPayment"
        {...methods.register('downPayment')}
        placeholder="Ex: $50,000"
        className="special-inputbar"
      />
    </div>

{/* Interest Rate Type */}
<div className="mt-4">
  <Label htmlFor="interestRateType" className="text-lg">Interest Rate Type</Label>
  <select
    id="interestRateType"
    {...methods.register('interestRateType')}
    className="special-inputbar"
  >
    <option value="fixed">Fixed</option>
    <option value="variable">Variable</option>
  </select>
</div>


    {/* Repayment Plan */}
    <div className="mt-4">
      <Label htmlFor="repaymentPlan" className="text-lg">Repayment Plan</Label>
      <Input
        id="repaymentPlan"
        {...methods.register('repaymentPlan')}
        placeholder="Ex: Monthly payments"
        className="special-inputbar"
      />
    </div>
  </div>
);

export default LoanInformation;
