import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

function Note(props) {
    return (
        <div>
            <ListItem>
                <ListItemText primary={props.text} secondary="🚀🚀" />
            </ListItem>
            
        </div>
    )
}

export default Note;
