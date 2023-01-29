form.onclick = function (event) {
    event.target.style.backgroundColor = 'yellow';

    alert(`Target Name:${event.target.tagName} Root: ${this.tagName}`);



    setTimeout(() => {
        event.target.style.backgroundColor = '';
    }, 3000);

    //!event.taget=> target the element where the event is occer

    //!this=(event.currentTarget) => taget the Currrnt Elemet

}