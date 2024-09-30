import SpinWheel from '@/components/SpinWheel'; // Import your SpinWheel component

const SpinWheelPage = () => {
  return (
    <div className="spin-wheel-page flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-gray-800"><br></br><br></br>Spin the Wheel & Win!</h1>
      <SpinWheel />
    </div>
  );
};

export default SpinWheelPage;

