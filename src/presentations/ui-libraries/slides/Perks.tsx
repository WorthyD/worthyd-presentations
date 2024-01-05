import { Slide } from '../../../components/Slide';
import { JSX } from '../../../components/SyntaxHighlight';

const stuff = `
    //Input
    <TextField id="outlined-basic" label="Outlined" 
        variant="outlined" />

    // Output
    <div class="">
        <label class="" data-shrink="false" 
            for="outlined-basic" id="outlined-basic-label">
            Outlined
        </label>
        <div class="">
            <input type="text" aria-invalid="false" 
                id="outlined-basic" class="" value="">

            <fieldset aria-hidden="true" class="">
                <legend class=""><span>Outlined</span></legend>
            </fieldset>
        </div>
    </div>
`;

export const Perks = () => (
    <>
        <Slide>
            <Slide>
                <h2>Perks</h2>
                <p>Why chose an existing library over another?</p>
            </Slide>
            <Slide>
                <h2>They are free</h2>
                <p>Except KendoUI</p>
            </Slide>
            <Slide>
                <h2>Built to be Extended</h2>
                <ul>
                    <li>
                        <a
                            href="https://mui.com/material-ui/customization/theming/"
                            target="_blank"
                        >
                            MUI
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://material.angular.io/cdk/categories"
                            target="_blank"
                        >
                            Angular Material
                        </a>
                    </li>
                    <li>Veutify - About the same</li>
                </ul>
            </Slide>
            <Slide>
                <h2>Aria / A11y</h2>
                <p>Most libraries are already built with usability in mind.</p>
                <JSX code={stuff} />
            </Slide>
            <Slide>
                <h2>Bug Fixes</h2>
                <p>MUI's bug fixes don't live for very long (4 to 5 days)</p>
            </Slide>
            <Slide>
                <h2>Rich Interactions</h2>
                <iframe
                    src="https://codesandbox.io/embed/sleepy-worker-mznpg7?autoresize=1&fontsize=14&hidenavigation=1&theme=dark&view=preview"
                    style={{
                        width: '500px',
                        height: '200px',
                        border: 0,
                        borderRadius: '4px',
                        overflow: 'hidden',
                    }}
                    // styles=""
                    title="sleepy-worker-mznpg7"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
            </Slide>
            <Slide>
                <h2>Fully Documented</h2>
                <p>Don't really need a demo of it, just look</p>
            </Slide>
        </Slide>
    </>
);
