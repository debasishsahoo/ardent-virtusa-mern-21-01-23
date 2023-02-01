import React from "react";


function Footer() {

    const footerArray = ['Foo', 'Bar', 'Bam', 'Baz', 'Trek', 'Bam', 'Baz', 'Trek','dev']

    return (
        <footer>
            <ul>
                {/* <li><a href="#">Foo</a></li>
                <li><a href="#">Bar</a></li>
                <li><a href="#">Bam</a></li>
                <li><a href="#">Baz</a></li>
                <li><a href="#">Trek</a></li> */}


                {
                    footerArray.map((e) => {
                        return (
                            <li><a href="#">{e}</a></li>
                        )
                    })
                }

            </ul>
        </footer>
    )

}

export default Footer