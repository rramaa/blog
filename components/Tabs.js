import React from 'react'
import {config} from '../config/config'

function Heading({headings, selected, updateSelected}) {
    return (
        <div className={"tabs-wrapper"}>
            {headings.map(heading => (
                <div className={heading === selected ? "heading selected" : "heading"} onClick={() => updateSelected(heading)} key={heading}>{heading}</div>
            ))}
            <style jsx>{`
                .tabs-wrapper {
                    display: flex;
                    justify-content: space-around;
                    font-size: 24px;
                    margin: 16px auto;
                }
                .heading {
                    cursor: pointer;
                    width: 100%;
                    text-align: center;
                    padding: 16px;
                    background-color: ${config.css.primaryLightestColor}
                }
                .heading:hover {
                    background-color: ${config.css.primaryLightColor}
                }
                .selected {
                    border-bottom: 4px solid ${config.css.primaryColor}
                }
            `}</style>
        </div>
    )
}

export default function Tabs({ tabs, renderer }) {
    let tabHeadings = Object.keys(tabs);
    let [selected, updateSelected] = React.useState(tabHeadings[0])
    return (
        <>
            <Heading headings={tabHeadings} selected={selected} updateSelected={updateSelected} />
            {renderer(tabs[selected])}
        </>
    )
}
