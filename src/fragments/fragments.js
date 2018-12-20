import React from 'react';
class Fragments extends React.Component {
    render() {
        return (
            <div>
                <>
                    <div>测试1</div>
                    <div>测试2</div>
                    <div>测试3</div>
                </>

                <React.Fragment key = {1}> 
                    <div>测试4</div>
                    <div>测试5</div>
                    <div>测试6</div>
                </React.Fragment>

            </div>

        );
    }
}

export default Fragments;