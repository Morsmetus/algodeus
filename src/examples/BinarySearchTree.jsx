import React, { useEffect, useState } from 'react';
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
import { BinarySearchTree } from 'data-structures';

export const BinarySearchTreeExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }

    const forceUpdate = useForceUpdate();

    const [tree] = useState(new BinarySearchTree(10));
    const [item, setItem] = useState('');
    const [lookupResult, setLookupResult] = useState(undefined);

    useEffect(() => {
        tree.insert(14);
        tree.insert(2);
        tree.insert(7);
        tree.insert(1);
        tree.insert(16);
        tree.insert(15);
        forceUpdate();
    }, []);

    const onInsert = () => {
        if (item.length < 1) return;
        tree.insert(item);
        setItem('');
        forceUpdate();
    };

    const onLookup = () => {
        if (item.length < 1) return;
        setLookupResult(tree.lookup(item));
        forceUpdate();
    };

    const onRemove = () => {
        if (item.length < 1) return;
        tree.remove2(item);
        setItem('');
        forceUpdate();
    };

    return (
        <Container>
            <PageTitle>Binary Search Tree</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <ToolsItem>
                        <Button onClick={onInsert}>Insert</Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button danger={true} onClick={onRemove}>
                            Remove
                        </Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button onClick={onLookup}>Lookup</Button>
                    </ToolsItem>
                </ToolsRow>
            </Tools>
            {/*<Visualizer items={tree} />*/}
            <Code>{tree}</Code>
            {lookupResult && <Code>{lookupResult}</Code>}
        </Container>
    );
};
