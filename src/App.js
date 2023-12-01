import "./App.css";
import {
	RealstateCollection,
	NavBarHeader2,
	MarketingFooterBrand,
} from "./ui-components";

function App() {
	return (
		<>
			<NavBarHeader2 width={"100%"} />
			<RealstateCollection width={"100%"} />;
			<MarketingFooterBrand width={"100%"} />
		</>
	);
}

export default App;
