import colors from '../../global/colors';

export default {
  colorBlue: colors.lightBlue,
  feature: {
    padding: 15
  },
  item: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: colors.lightBlue,
    borderRadius: 30
  },
  desc: {
    flex: 1,
    paddingLeft: 15
  },
  descTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.lightDark
  },
  descContent: {
    fontSize: 14,
    color: colors.lighterDark
  }
};
