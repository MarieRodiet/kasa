function AboutFragment(props) {
    const { title, description } = { props };
    console.log(props);
    return (
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    );
}
export default AboutFragment;
