# Two Sum

## brutal force

```py
def twoSum(self, nums: List[int], target: int) -> List[int]:
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]
```

## best as I know

### Main idea

- Create a dictionary of all elements of the array.
- Iterate through the array. From the target-value subtract the current array element and look for it in the map.
- If found the current value and the found element in the map will be the target sum pair.

```ts
function twoSum(nums: number[], target: number): number[] {
    const keyMap: object = { }
    for (let i: number = 0; i <= nums.length; i++) {
        keyMap[`${nums[i]}`] = i
    }
    for (let i: number = 0; i <= nums.length; i++) {
        let targetIndex: number | undefined = keyMap[target - nums[i]]
        if (targetIndex && i !== targetIndex) return [i,targetIndex] 
    }
};
```
