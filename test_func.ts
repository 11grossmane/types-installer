import { getDependencies, install } from "./src/actions";

getDependencies();
install({ toDev: true });
