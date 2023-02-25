import { Box, Theme, BoxProps, styled } from '@mui/material';
import { AnimationOnScroll } from 'react-animation-on-scroll';

type BounceInRightProps = BoxProps & {
    duration?: number;
    startsFrom?: string;
};

const Root = styled(Box)<BounceInRightProps>(({ theme, startsFrom }: { theme: Theme; startsFrom?: string }) => ({
    '& .bounceInRight': {
        '@keyframes bounceInRight': {
            from: {
                opacity: 0,
                transform: `translateX(${startsFrom || '100vw'})`,
            },
            to: {
                opacity: 1,
                transform: 'translateX(0)',
            },
        },
        animation: `bounceInRight ${theme.transitions.easing.sharp}`,
    },
}));

export const BounceInRight: React.FC<BounceInRightProps> = ({ children, duration = 0.5, startsFrom, ...props }) => {
    return (
        <Root {...props} startsFrom={startsFrom}>
            <AnimationOnScroll animateIn="bounceInRight" duration={duration} {...props}>
                {children}
            </AnimationOnScroll>
        </Root>
    );
};
