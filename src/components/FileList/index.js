import React from "react";
import "./styles.css";
import {FaCheckCircle} from "react-icons/fa";
import {AiFillCloseCircle} from "react-icons/ai";
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const FileList = props => {

    const {files} = props;

    return(
        <div className="dialog-upload">
            {files.map(file =>(
                <li key={file.id}>
                    <div className="left">
                        <img src={file.preview} alt={file.name}/>
                        <div className="text">
                                <strong>
                                    {file.name}
                                </strong>
                                <p>{file.readableSize}</p>
                        </div>
                    </div>
                    { file.uploaded && <FaCheckCircle 
                        size={ 22 } 
                        color={"green"}
                    /> }

                    { (props.progress > 0 && !props.upload ) && <CircularProgressbar 
                            styles={{
                                root: {width: 24},
                                path: { stroke: '#9C27B0' },
                                trail: {stroke: '#666'}
                            }}
                            strokeWidth={12}
                            value={file.progress}
                    /> }

                    { file.error && <AiFillCloseCircle
                        size={22}
                        color={"red"}
                    /> }
                </li>
            ))}
        </div>
    )
}

export default FileList;