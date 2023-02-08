const People = ({ firstname, lastname }) => (
    <div>
        {firstname} {lastname}
    </div>
);

export default function MainApp(props) {
    const peoplelist = props.data;
    return (
        <div>
            {peoplelist.map((p, i) => (
                <People {...p} key={i} />
            ))}
        </div>
    );
}