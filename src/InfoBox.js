import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total}) {
    return (
        <Card className="infoBox">
            <CardContent>
                {/* Title i.e Corona Virus Cases*/}
                <Typography className="infoBox__title" color="textSecondary">{title}</Typography>
                {/* Number of cases */}
                <h2 className="infoBox__cases">{cases}</h2>
                {/* Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    {total} Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default InfoBox