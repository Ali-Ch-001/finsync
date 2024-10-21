import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UseFormReturn } from 'react-hook-form';

interface FinancialInformationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const FinancialInformation: React.FC<FinancialInformationProps> = ({ methods }) => (
  <div className="structure-information mt-8">
    <h3 className="info-text">Financial Information</h3>

    {/* Current Assets */}
    <div className="mt-4">
      <Label htmlFor="currentAssets" className="text-lg">Current Assets</Label>
      <Input
        id="currentAssets"
        {...methods.register('currentAssets')}
        placeholder="Ex: Checking: $20,000, Savings: $35,000, 401(k): $80,000"
        className="special-inputbar"
      />
    </div>

    {/* Current Liabilities */}
    <div className="mt-4">
      <Label htmlFor="currentLiabilities" className="text-lg">Current Liabilities</Label>
      <Input
        id="currentLiabilities"
        {...methods.register('currentLiabilities')}
        placeholder="Ex: Credit card debt: $5,000, Car loan: $12,000"
        className="special-inputbar"
      />
    </div>

    {/* Existing Debts */}
    <div className="mt-4">
      <Label htmlFor="existingDebts" className="text-lg">Existing Debts</Label>
      <Input
        id="existingDebts"
        {...methods.register('existingDebts')}
        placeholder="Ex: None aside from credit card and car loan"
        className="special-inputbar"
      />
    </div>
  </div>
);

export default FinancialInformation;
