

export default function visibility(props){
        let opacityClass = props.visible ? 'Visible' : 'Hidden';
        return (
            <div className={opacityClass}>
                {props.children}
            </div>
        );
}
