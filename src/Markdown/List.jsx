import Para from "./Para"

export default function List({ items = ["item 1", "item 2"], align = 'left', ordered = false }) {
    return (
        <Para align={align}>
            {
                ordered ?
                    <ol>
                        {
                            items.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ol>
                    :
                    <ul>
                        {
                            items.map(item => {
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
            }
        </Para>
    )
}
