import './Options.css';
export function Options({ options, containerClass, hyperLinkClass }) {
    return (
        <ul className={containerClass}>
            {
                options?.map(option => 
                    <li>
                        <a href={option.link} className={hyperLinkClass}>{option.name}</a>
                    </li>
                )
            }
        </ul>
    )
}