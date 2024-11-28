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
<div className="mt-4 space-y-2">
  <Label className="font-bold text-xl">Interest Rate Type</Label>
  <div className="pt-2 flex flex-wrap gap-4 text-lg">
    <label className="flex items-center space-x-2">
      <Input
        type="radio"
        value="fixed"
        {...methods.register('interestRateType')}
        className="form-radio h-4 w-4 text-primary focus:ring-primary"
      />
      <span>Fixed</span>
    </label>
    <label className="flex items-center space-x-2">
      <Input
        type="radio"
        value="variable"
        {...methods.register('interestRateType')}
        className="form-radio h-4 w-4 text-primary focus:ring-primary"
      />
      <span>Variable</span>
    </label>
  </div>
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
