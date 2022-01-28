import React, { useState } from 'react';
import Input from 'components/Input';
import Container from 'layout/Container';
import Code from 'layout/Code';
import Button from 'components/Button';
import Tools from 'layout/Tools';
import Visualizer from 'layout/Visualizer';
import ToolsRow from 'layout/ToolsRow';
import { recursiveTreeToArray } from 'helpers/arrays';
import PageTitle from 'layout/PageTitle';
import { Queue } from 'data-structures/Queue';
import ToolsItem from 'layout/ToolsItem';

export const QueueExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }
    const forceUpdate = useForceUpdate();

    const [queue, setQueue] = useState(new Queue());
    const [item, setItem] = useState('');

    const handleEnqueue = () => {
        if (item.length < 1) return;
        queue.enqueue(item);
        setItem('');
        forceUpdate();
    };

    const handleDequeue = () => {
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
                        <Button onClick={handleEnqueue}>Enqueue</Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button danger={true} onClick={handleDequeue}>
                            Dequeue
                        </Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button disabled onClick={handleEnqueue}>
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
