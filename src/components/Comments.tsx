import * as React from 'react';
import CommentsForm from './CommentsForm';
import ReadComments from './ReadComments';

export default function Comments() {
    return (
        <div>
            <CommentsForm />
            <ReadComments />
        </div>
    );
}
