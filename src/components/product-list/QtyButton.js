import React, { useEffect, useState } from "react"
import clsx from "clsx"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Badge from "@material-ui/core/Badge"
import { makeStyles } from "@material-ui/core/styles"

import Cart from "../../images/Cart"

const useStyles = makeStyles(theme => ({
    qtyText: {
        color: "#fff",
    },
    mainGroup: {
        height: "3rem",
    },
    editButtons: {
        height: "1.525rem",
        borderRadius: 0,
        backgroundColor: theme.palette.secondary.main,
        borderLeft: "2px solid #fff",
        borderRight: "2px solid #fff",
        borderBottom: "none",
        borderTop: "none",
    },
    endButtons: {
        borderRadius: 50,
        backgroundColor: theme.palette.secondary.main,
        border: "none",
    },
    cartButton: {
        marginLeft: "0 !important",
    },
    minusButton: {
        borderTop: "2px solid #fff",
    },
    minus: {
        marginTop: "-0.25rem",
    },
    qtyButton: {
        "&:hover": {
            backgroundColor: theme.palette.secondary.main
        },
    },
    badge: {
        color: "#fff",
        fontSize: "1.5rem",
        backgroundColor: theme.palette.secondary.main,
        padding: 0,
    },
}))

export default function QtyButton({ stock, selectedVariant }) {
    const classes = useStyles()
    const [qty, setQty] = useState(1)

    const handleChange = direction => {
        if (qty === stock[selectedVariant].qty && direction === "up") {
            return null
        }
        if (qty === 1 && direction === "down") {
            return null
        }
        const newQty = direction === "up" ? qty + 1 : qty - 1
        setQty(newQty)
    }

    useEffect(() => {
        if (stock === null || stock === -1) {
            return undefined
        } else if (qty > stock[selectedVariant].qty) {
            setQty(stock[selectedVariant].qty)
        }
    }, [stock, selectedVariant])

    return (
        <Grid item>
            <ButtonGroup classes={{root: classes.mainGroup}}>
                <Button classes={{root: clsx(classes.endButtons, classes.qtyButton)}}>
                    <Typography variant="h3" classes={{root: classes.qtyText}}>
                        {qty}
                    </Typography>
                </Button>
                <ButtonGroup orientation="vertical">
                    <Button
                        onClick={() => handleChange("up")}
                        classes={{root: classes.editButtons}}
                    >
                        <Typography variant="h3" classes={{root: classes.qtyText}}>
                            +
                        </Typography>
                    </Button>
                    <Button
                        onClick={() => handleChange("down")}
                        classes={{root: clsx(classes.editButtons, classes.minusButton)}}
                    >
                        <Typography variant="h3" classes={{root: clsx(classes.qtyText, classes.minus)}}>
                            -
                        </Typography>
                    </Button>
                </ButtonGroup>
                <Button classes={{root: clsx(classes.endButtons, classes.cartButton)}}>
                    <Badge overlap="circle" badgeContent="+" classes={{badge: classes.badge}}>
                        <Cart color="#fff" />
                    </Badge>
                </Button>
            </ButtonGroup>
        </Grid>
    )
}