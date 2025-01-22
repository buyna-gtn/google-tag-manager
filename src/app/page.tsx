import { AddToCart } from "@/components/add_to_cart";
import { Button } from "@/components/ui/button";
import { InfoButton } from "@/components/info_button";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 gap-4">
      <h1 className="text-4xl font-bold">Welcome to Homepage!</h1>
      <p>This is a simple homepage for the website.</p>
      <Button className="font-semibold">
        <a href="/thank_you">Go to Thank You Page</a>
      </Button>
      <Button id="button" className="font-semibold" variant="destructive">
        Click me!
      </Button>
      <InfoButton />
      <AddToCart />
    </div>
  );
};
export default HomePage;
