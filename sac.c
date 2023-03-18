#include <stdio.h>

void main()
{

    int arr[] = {0, 3, 2, 6, 2, 1, 0, 0};
    // n=8

    int max = arr[0];
    int min = arr[0];

    for (int i = 0; i < 7; i++)
    {

        if (arr[i] >= max)
        {
            max = arr[i];
        }
        if (arr[i] <= min)
        {
            min = arr[i];
        }
    }

    for (int i = 0; i <= max; i++)
    {
        min = min + i;
        for(int j = 0; j <= 7; j++)
        {
            if (min != arr[i])
            {
                printf("%d", min);
            }
                break;  
        }
    }

    // printf("%d  %d",max,min);
}