import React from "react";
import { config } from "../config/config.json";

export default function Footer() {
    return (
        <div className="footer">
            &copy; 2018 - {new Date().getFullYear()} {config.author}
        </div>
    );
}
