import EmploymentInformation from '@/components/EmploymentInformation';
import LoanInformation from '@/components/LoanInformation';
import FinancialInformation from '@/components/FinancialInformation';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'

interface InvestmentLoanProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const InvestmentLoan: React.FC<InvestmentLoanProps> = ({ methods }) => (
  <>


    {/* Investment Specific Information */}
    <div className="structure-information mt-8">
      <h3 className="info-text">Investment Information</h3>

      {/* Investment Type */}
      <div className="mt-4">
        <Label htmlFor="investmentType" className="text-lg">Investment Type</Label>
        <Input
          id="investmentType"
          {...methods.register('investmentType')}
          placeholder="Ex: Commercial Real Estate Investment"
          className="special-inputbar"
        />
      </div>

      {/* Investment Purpose */}
      <div className="mt-4">
        <Label htmlFor="investmentPurpose" className="text-lg">Investment Purpose</Label>
        <Input
          id="investmentPurpose"
          {...methods.register('investmentPurpose')}
          placeholder="Ex: Purchase of a commercial property in downtown Cityville to lease to businesses"
          className="special-inputbar"
        />
      </div>

      {/* Investment Location */}
      <div className="mt-4">
        <Label htmlFor="investmentLocation" className="text-lg">Investment Location</Label>
        <Input
          id="investmentLocation"
          {...methods.register('investmentLocation')}
          placeholder="Ex: 456 Finance Street, Cityville, 98765"
          className="special-inputbar"
        />
      </div>

      {/* Property Value (Appraisal) */}
      <div className="mt-4">
        <Label htmlFor="propertyValue" className="text-lg">Property Value (Appraisal)</Label>
        <Input
          id="propertyValue"
          {...methods.register('propertyValue')}
          placeholder="Ex: $600,000"
          className="special-inputbar"
        />
      </div>
    </div>

    {/* Real Estate Holdings Section */}
    <div className="structure-information mt-8">
      <h3 className="info-text">Current Real Estate Holdings</h3>

      {/* Ownership */}
      <div className="mt-4">
        <Label htmlFor="ownership" className="text-lg">Ownership</Label>
        <Input
          id="ownership"
          {...methods.register('ownership')}
          placeholder="Ex: 100% ownership of the commercial property"
          className="special-inputbar"
        />
      </div>

      {/* Current Real Estate Holdings */}
      <div className="mt-4">
        <Label htmlFor="realEstateHoldings" className="text-lg">Current Real Estate Holdings</Label>
        <Input
          id="realEstateHoldings"
          {...methods.register('realEstateHoldings')}
          placeholder="Ex: Residential home valued at $350,000"
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

export default InvestmentLoan;
