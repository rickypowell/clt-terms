import * as React from 'react';

const CHARACTER_MAX = 255;

export default function Comments() {
    const [charCount, setCharCount] = React.useState(0);

    return (
        <form
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            onSubmit={(e) => e.preventDefault()}
        >
            <fieldset
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '16px',
                    margin: '0',
                    border: 'none',
                }}
            >
                <div>
                    <label htmlFor="comments">Comments</label>{' '}
                    <span
                        style={{
                            fontSize: '0.8rem',
                            color: charCount === CHARACTER_MAX ? 'red' : 'inherit',
                        }}
                    >
                        ({charCount} of {CHARACTER_MAX}){' '}
                        {charCount === CHARACTER_MAX ? 'maximum number of characters reached' : ''}
                    </span>
                </div>
                <textarea
                    id="comments"
                    name="comments"
                    rows={5}
                    style={{
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        fontWeight: 'inherit',
                    }}
                    maxLength={CHARACTER_MAX}
                    onChange={(e) => {
                        const text = e.target.value;
                        setCharCount(text.length);
                    }}
                ></textarea>
            </fieldset>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    padding: '16px',
                }}
            >
                <input
                    type="submit"
                    value="Add Comment"
                    style={{
                        fontWeight: 600,
                        padding: '8px 16px',
                    }}
                    disabled={charCount === CHARACTER_MAX}
                />
            </div>
        </form>
    );
}
