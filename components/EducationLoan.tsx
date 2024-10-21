import EmploymentInformation from '@/components/EmploymentInformation';
import LoanInformation from '@/components/LoanInformation';
import FinancialInformation from '@/components/FinancialInformation';
import { UseFormReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'

interface EducationLoanProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  methods: UseFormReturn<any>;
}

const EducationLoan: React.FC<EducationLoanProps> = ({ methods }) => (
  <>


    {/* Education Information Section */}
    <div className="structure-information mt-8">
      <h3 className="info-text">Education Information</h3>

      {/* Institution Name */}
      <div className="mt-4">
        <Label htmlFor="institutionName" className="text-lg">Institution Name</Label>
        <Input
          id="institutionName"
          {...methods.register('institutionName')}
          placeholder="Ex: University of ABC"
          className="special-inputbar"
        />
      </div>

      {/* Course of Study */}
      <div className="mt-4">
        <Label htmlFor="courseOfStudy" className="text-lg">Course of Study</Label>
        <Input
          id="courseOfStudy"
          {...methods.register('courseOfStudy')}
          placeholder="Ex: Bachelor of Science"
          className="special-inputbar"
        />
      </div>

      {/* Duration of Course */}
      <div className="mt-4">
        <Label htmlFor="courseDuration" className="text-lg">Duration of Course</Label>
        <Input
          id="courseDuration"
          {...methods.register('courseDuration')}
          placeholder="Ex: 4 years"
          className="special-inputbar"
        />
      </div>

      {/* Start Date */}
      <div className="mt-4">
        <Label htmlFor="startDate" className="text-lg">Start Date</Label>
        <Input
          id="startDate"
          {...methods.register('startDate')}
          placeholder="Ex: September 1, 2024"
          className="special-inputbar"
        />
      </div>

      {/* Expected Graduation Date */}
      <div className="mt-4">
        <Label htmlFor="graduationDate" className="text-lg">Expected Graduation Date</Label>
        <Input
          id="graduationDate"
          {...methods.register('graduationDate')}
          placeholder="Ex: June 2028"
          className="special-inputbar"
        />
      </div>

      {/* Purpose of the Loan */}
      <div className="mt-4">
        <Label htmlFor="loanPurposeEducation" className="text-lg">Purpose of the Loan</Label>
        <Input
          id="loanPurposeEducation"
          {...methods.register('loanPurposeEducation')}
          placeholder="Ex: Tuition fees, accommodation, books, etc."
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

export default EducationLoan;
