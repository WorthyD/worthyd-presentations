import { Slide } from '~/components/Slide';
import { JSX } from '~/components/SyntaxHighlight';
import { Note } from '~/components/Notes';

const stuff = `
    import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
    export interface ButtonProps extends MuiButtonProps {
        // Custom Props
    }

    export function ProjectButton(props: ButtonProps) {
        return (
            <Button
                variant="contained"
                color='primary'
                {...props}
            >
                {props.children}
            </Button>
        );
    }
`


export const Planning = () => (
    <Slide>
        <Slide>
            <h2>Planning</h2>
            <p>You've lost the battle. What questions need to be answered before moving forward.</p>
        </Slide>
        <Slide>
            <h2>Distribution</h2>
            <p>How will it be distributed?</p>
            <ul>
                <li className="fragment">in project</li>
                <li className="fragment">public npm registry</li>
                <li className="fragment">private npm registry?</li>
            </ul>
            <Note>
                <ul>
                    <li>Keeping in project will discourage reusability</li>
                    <li>Do they actually want it public?</li>
                    <li>Do they know how much it costs to setup a private registry?</li>
                </ul>
            </Note>
        </Slide>
        <Slide>
            <h2>Versioning & Releases</h2>
            <p>How are you going to handle versioning and releases?</p>
            <Note>
                Maintaining the project while working on production can be challenging.
                Kikko wanted to trash and alert box, but had no idea where it was being used.
                Fix, PR, Merge, Deploy, Update npm , install
            </Note>
        </Slide>
        <Slide>
            <h2>Maintenance</h2>
            <p>Who own's the long term maintenance after initial release.</p>

        </Slide>
        <Slide>
            <h2>Documentation</h2>
            <ul>
                <li className="fragment">Storybook</li>
                <li className="fragment">JSDoc/Gen</li>
                <li className="fragment">Custom</li>
            </ul>
        </Slide>
        <Slide>
            <h2>Implementation Strategy</h2>
            <p>Abstract as an escape strategy</p>
            <JSX code={stuff} />
            <Note>
                Abstract away so that you do not have to make changes to 400 files, but only 1 root file
            </Note>

        </Slide>
    </Slide>
)
