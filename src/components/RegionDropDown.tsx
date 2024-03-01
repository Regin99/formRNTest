import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useMemo, useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {FlatList} from 'react-native-gesture-handler';

import {Country} from '../utils/types';
import {getFlagLogo, getSnapshot} from '../api';
import {ErrorText, Input} from '.';
import {Search} from '../assets/icons';

type RegionItemProps = {
  id: number;
  name: string;
};

type RegionDropDownProps = {
  value: Country;
  onChange: (value: Country) => void;
  label?: string;
  error?: any;
};

export const RegionItem = ({id, name}: RegionItemProps) => {
  const {data: flagIcon, isLoading} = useQuery({
    queryKey: ['flag', id],
    queryFn: () => getFlagLogo(id),
    enabled: !!id,
  });

  return (
    <View style={styles.itemContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        flagIcon && (
          <Image
            source={{
              uri: `data:image/png;base64,${flagIcon.base64()}`,
            }}
            style={styles.icon}
          />
        )
      )}
      <Text>{name}</Text>
    </View>
  );
};

export const RegionDropDown = ({
  value,
  onChange,
  label,
  error,
}: RegionDropDownProps) => {
  const {data: snapshotData, isLoading} = useQuery({
    queryKey: ['snapshot'],
    queryFn: getSnapshot,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [search, setSearch] = useState('');

  const renderItem = useCallback(
    ({item}: {item: Country}) => (
      <TouchableOpacity
        style={styles.dropDownItem}
        onPress={() => {
          onChange(item);
          setIsOpen(false);
        }}>
        <RegionItem id={item.id} name={item.name} />
      </TouchableOpacity>
    ),
    [onChange],
  );
  const filteredData = useMemo(
    () =>
      snapshotData?.countries.filter(item => {
        if (search.length > 2) {
          return item.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return item;
        }
      }),
    [search, snapshotData],
  );
  return (
    <>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={styles.dropDownContainer}
        onLayout={({nativeEvent}) =>
          setButtonHeight(nativeEvent.layout.height)
        }>
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          disabled={isLoading}
          style={styles.dropDownButtonContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <RegionItem
              id={value.id}
              name={value.name || 'Choose Your Region'}
            />
          )}
        </TouchableOpacity>
        {isOpen && (
          <View style={[styles.dropDownContent, {top: buttonHeight}]}>
            <View style={styles.searchContainer}>
              <Input
                value={search}
                icon={<Search />}
                placeholder="Type Region Name"
                onChange={setSearch}
              />
            </View>
            <FlatList data={filteredData} renderItem={renderItem} />
          </View>
        )}
      </View>
      {error?.id && <ErrorText>{error?.id?.message}</ErrorText>}
    </>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    height: 20,
    width: 30,
  },
  label: {
    fontWeight: 'bold',
  },
  dropDownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  dropDownButtonContainer: {
    flex: 1,
  },
  searchContainer: {paddingHorizontal: 6, paddingVertical: 8},
  dropDownItem: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
  },
  dropDownContent: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    maxHeight: 300,
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: {height: 4, width: 0},
    shadowOpacity: 0.5,
  },
});
