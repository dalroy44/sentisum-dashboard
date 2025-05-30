"use client";

import ContactTrendChart from "@/components/chart"; // Assuming this path is correct
import TableView from "./tableView";

export default function Infoports() {
    return (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2"> {/* Increased gap for better spacing */}
            <ContactTrendChart />
            <TableView />
        </div>
    );
}