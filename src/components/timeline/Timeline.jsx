import React from 'react';
import { 
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@material-ui/lab'
import { makeStyles} from '@material-ui/styles'
import { Typography } from '@material-ui/core'
import data from './data.json' 
const useStyles = makeStyles({
    root:{
        "backgroundImage":"url(https://ibnb.finance/images/hero-bg--accent.png)"
    }
})
export default function AlternateTimeline() {
    const { root } = useStyles();
    const { title, items } = data
    return (
        <div className={root}>
            <Typography variant="h2" align='center'>
                {title}
            </Typography>
            <Timeline align="alternate">
            {items.map(item=><TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        {item.quarter}
                        {item.title}
                        {item.details}
                    </TimelineContent>
                </TimelineItem>
                )}
                
                
            </Timeline>
        </div>
    );
}
