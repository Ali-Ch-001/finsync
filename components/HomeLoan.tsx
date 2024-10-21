import EmploymentInformation from '@/components/EmploymentInformation';
import LoanInformation from '@/components/LoanInformation';
import FinancialInformation from '@/components/FinancialInformation';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'

interface HomeLoanProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const HomeLoan: React.FC<HomeLoanProps> = ({ methods }) => (
  <>

    {/* Property Information Section */}
    <div className="structure-information mt-8">
      <h3 className="info-text">Property Information</h3>

      {/* Type of Property */}
      <div className="mt-4">
        <Label htmlFor="propertyType" className="text-lg">Type of Property</Label>
        <Input
          id="propertyType"
          {...methods.register('propertyType')}
          placeholder="Ex: Single-family home"
          className="special-inputbar"
        />
      </div>

      {/* Purchase Price */}
      <div className="mt-4">
        <Label htmlFor="purchasePrice" className="text-lg">Purchase Price</Label>
        <Input
          id="purchasePrice"
          {...methods.register('purchasePrice')}
          placeholder="Ex: $300,000"
          className="special-inputbar"
        />
      </div>

      {/* Appraised Value */}
      <div className="mt-4">
        <Label htmlFor="appraisedValue" className="text-lg">Appraised Value</Label>
        <Input
          id="appraisedValue"
          {...methods.register('appraisedValue')}
          placeholder="Ex: $305,000"
          className="special-inputbar"
        />
      </div>

      {/* Existing Mortgage Details */}
      <div className="mt-4">
        <Label htmlFor="mortgageDetails" className="text-lg">Existing Mortgage Details</Label>
        <Input
          id="mortgageDetails"
          {...methods.register('mortgageDetails')}
          placeholder="Ex: None"
          className="special-inputbar"
        />
      </div>

      {/* Real Estate Agent Information */}
      <div className="mt-4">
        <Label htmlFor="realEstateAgent" className="text-lg">Real Estate Agent Information</Label>
        <Input
          id="realEstateAgent"
          {...methods.register('realEstateAgent')}
          placeholder="Ex: John Realtor – (123) 555-6789"
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

export default HomeLoan;
