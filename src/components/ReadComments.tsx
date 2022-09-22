import * as React from 'react';

export default function ReadComments() {
    const items = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum enim sed eum aliquid perferendis rerum debitis magni rem quia distinctio id iste, dolore delectus culpa natus exercitationem impedit. At!',
            date: '2022-06-12',
            username: 'unclebob',
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum enim sed eum aliquid perferendis rerum debitis magni rem quia distinctio id iste, dolore delectus culpa natus exercitationem impedit. At!',
            date: '2022-06-13',
            username: 'spaceykacy',
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam voluptatum enim sed eum aliquid perferendis rerum debitis magni rem quia distinctio id iste, dolore delectus culpa natus exercitationem impedit. At!',
            date: '2022-06-13',
            username: 'gclooney',
        }
    ];
    return (
        <ul
            style={{
                padding: '0',
            }}
        >
            {items.map((item, i) => (
                <li
                    style={{
                        listStyle: 'none',
                        margin: '36px 0',
                    }}
                >
                    <p
                        style={{
                            padding: '0',
                            margin: '0',
                            marginBottom: '8px',
                        }}
                    >
                        {item.text}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >
                        <strong>{item.username}</strong>
                        <span
                            style={{
                                fontSize: '0.8rem',
                            }}
                        >
                            {new Date(item.date).toLocaleDateString()}
                        </span>
                    </div>
                </li>
            ))}
        </ul>
    );
}
