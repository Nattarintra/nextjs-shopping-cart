import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  }),
);

const ProductCard = ({
  className,
  imageUrl = '/images/default.png',
  title = 'Lorem ipsum dolor sit amet.',
  prices = [
    { amount: 3999.92, currency: 'SEK' },
    { amount: 499.99, currency: 'EUR' },
  ],
  onClick,
}) => {
  const classes = useStyles();

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div className={clsx(classes.root, className)}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={imageUrl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom component="h5" variant="h5">
              {title}
            </Typography>

            <Typography color="textSecondary" component="p" variant="body2">
              {`${prices[0].amount} ${prices[0].currency}  ${prices[1].amount} ${prices[1].currency}`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" size="small" onClick={handleClick}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default ProductCard;
