import React, { useState } from 'react';
import { Input, Button } from 'components';
import {
    Visualizer,
    Code,
    Container,
    Tools,
    PageTitle,
    ToolsItem,
    ToolsRow,
} from 'layout';
import { recursiveTreeToArray } from 'helpers/arrays';
import { Queue } from 'data-structures/Queue';

export const QueueExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }
    const forceUpdate = useForceUpdate();

    const [queue] = useState(new Queue());
    const [item, setItem] = useState('');

    const onEnqueue = () => {
        if (item.length < 1) return;
        queue.enqueue(item);
        setItem('');
        forceUpdate();
    };

    const onDequeue = () => {
        queue.dequeue();
        setItem('');
        forceUpdate();
    };

    return (
        <Container>
            <PageTitle>Queue</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <ToolsItem>
                        <Button onClick={onEnqueue}>Enqueue</Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button danger={true} onClick={onDequeue}>
                            Dequeue
                        </Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button disabled onClick={onEnqueue}>
                            Peek
                        </Button>
                    </ToolsItem>
                </ToolsRow>
            </Tools>
            <Visualizer items={recursiveTreeToArray(queue.first)} />
            <Code>{queue}</Code>
        </Container>
    );
};
