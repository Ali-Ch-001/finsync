import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'
import { UseFormReturn } from 'react-hook-form';

interface EmploymentInformationProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const EmploymentInformation: React.FC<EmploymentInformationProps> = ({ methods }) => (
  <div className="structure-information">
    <h3 className="info-text">Employment Information</h3>

    {/* Employment Status */}
    <div className="mt-4">
      <Label htmlFor="employmentStatus" className="text-lg">Employment Status</Label>
      <Input
        id="employmentStatus"
        {...methods.register('employmentStatus')}
        placeholder="Ex: Employed Full-Time"
        className="special-inputbar"
      />
    </div>

    {/* Job Title */}
    <div className="mt-4">
      <Label htmlFor="jobTitle" className="text-lg">Job Title</Label>
      <Input
        id="jobTitle"
        {...methods.register('jobTitle')}
        placeholder="Ex: Software Engineer"
        className="special-inputbar"
      />
    </div>

    {/* Years of Employment */}
    <div className="mt-4">
      <Label htmlFor="yearsOfEmployment" className="text-lg">Years of Employment</Label>
      <Input
        id="yearsOfEmployment"
        {...methods.register('yearsOfEmployment')}
        placeholder="Ex: 5 years"
        className="special-inputbar"
      />
    </div>

    {/* Monthly Gross Income */}
    <div className="mt-4">
      <Label htmlFor="monthlyGrossIncome" className="text-lg">Monthly Gross Income</Label>
      <Input
        id="monthlyGrossIncome"
        {...methods.register('monthlyGrossIncome')}
        placeholder="Ex: $6,500"
        className="special-inputbar"
      />
    </div>

    {/* Other Sources of Income */}
    <div className="mt-4">
      <Label htmlFor="otherIncome" className="text-lg">Other Sources of Income</Label>
      <Input
        id="otherIncome"
        {...methods.register('otherIncome')}
        placeholder="Ex: None"
        className="special-inputbar"
      />
    </div>
  </div>
);

export default EmploymentInformation;
