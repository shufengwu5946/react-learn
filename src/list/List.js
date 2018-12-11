import React from 'react';
import ListBase from './ListBase';
class List extends React.Component {
    render() {
        return (
            <div>
                <ListBase numbers = {[1,2,3,4,5]}></ListBase>
            </div>
        );
    }
}
export default List;