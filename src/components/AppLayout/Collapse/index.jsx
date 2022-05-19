import { useState } from 'react';

function Collapse({ title, description, isList }) {
    const [toggled, updateToggle] = useState(true);
    return (
        <div className="collapse-fragment">
            <div className="collapse-fragment-top">
                <h1 className="collapse-fragment-top-title">{title}</h1>
                <div
                    onClick={() => updateToggle(!toggled)}
                    className="collapse-fragment-top-icon"
                >
                    <svg
                        className={toggled ? 'svg-up' : 'svg-down'}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="svg-path"
                            d="M13.8495 9.23864L15.2079 7.86941L7.60994 0.261718L0.0120036 7.87711L1.37042 9.23864L7.60994 2.9848L13.8495 9.23864Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
            {isList ? (
                <ul
                    className={
                        toggled
                            ? 'collapse-fragment-description-up'
                            : 'collapse-fragment-description-down'
                    }
                >
                    {description
                        ? description.map((element) => (
                              <li key={element}>{element}</li>
                          ))
                        : null}
                </ul>
            ) : (
                <p
                    className={
                        toggled
                            ? 'collapse-fragment-description-up'
                            : 'collapse-fragment-description-down'
                    }
                >
                    {description}
                </p>
            )}
        </div>
    );
}

export default Collapse;
